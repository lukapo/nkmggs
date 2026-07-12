import type { ComponentPropsWithoutRef } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

interface NativeButtonProps extends BaseButtonProps, ComponentPropsWithoutRef<'button'> {
  asChild?: false
  to?: never
}

interface RouterLinkButtonProps extends BaseButtonProps, Omit<LinkProps, 'className'> {
  asChild: true
}

type ButtonProps = NativeButtonProps | RouterLinkButtonProps

function buildClassName(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ')
}

export function Button(props: ButtonProps) {
  if (props.asChild) {
    const { variant = 'primary', size = 'md', className, asChild, ...rest } = props
    void asChild
    return <Link className={buildClassName(variant, size, className)} {...rest} />
  }

  const { variant = 'primary', size = 'md', className, type = 'button', ...rest } = props
  return <button type={type} className={buildClassName(variant, size, className)} {...rest} />
}
