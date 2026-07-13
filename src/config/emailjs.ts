export interface EmailJsConfig {
  serviceId: string
  templateId: string
  publicKey: string
}

export type EmailJsConfigKey = keyof EmailJsConfig

export type EmailJsConfigResult =
  | { status: 'ok'; config: EmailJsConfig }
  | { status: 'missing'; missingKeys: EmailJsConfigKey[] }

const ENV_KEYS = {
  serviceId: 'VITE_EMAILJS_SERVICE_ID',
  templateId: 'VITE_EMAILJS_TEMPLATE_ID',
  publicKey: 'VITE_EMAILJS_PUBLIC_KEY',
} as const satisfies Record<EmailJsConfigKey, keyof ImportMetaEnv>

function readEnvValue(key: keyof ImportMetaEnv): string {
  const value = import.meta.env[key]
  return typeof value === 'string' ? value.trim() : ''
}

function getMissingKeys(config: EmailJsConfig): EmailJsConfigKey[] {
  return (Object.keys(config) as EmailJsConfigKey[]).filter((key) => config[key].length === 0)
}

export function getEmailJsConfig(): EmailJsConfigResult {
  const config: EmailJsConfig = {
    serviceId: readEnvValue(ENV_KEYS.serviceId),
    templateId: readEnvValue(ENV_KEYS.templateId),
    publicKey: readEnvValue(ENV_KEYS.publicKey),
  }

  const missingKeys = getMissingKeys(config)

  if (missingKeys.length > 0) {
    return { status: 'missing', missingKeys }
  }

  return { status: 'ok', config }
}

export function getEmailJsMissingEnvVarNames(missingKeys: EmailJsConfigKey[]): string[] {
  return missingKeys.map((key) => ENV_KEYS[key])
}

export function requireEmailJsConfig(): EmailJsConfig {
  const result = getEmailJsConfig()

  if (result.status === 'missing') {
    const missingEnvNames = result.missingKeys.map((key) => ENV_KEYS[key])
    throw new Error(
      `EmailJS konfiguracija nije potpuna. Nedostaju varijable: ${missingEnvNames.join(', ')}.`,
    )
  }

  return result.config
}
