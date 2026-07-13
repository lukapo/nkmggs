import { site } from '../../../data/site'
import { Button } from '../../../components/ui/Button/Button'
import styles from './DonationFormPreview.module.scss'

const { form } = site.pages.donations

export function DonationFormPreview() {
  return (
    <section className={styles.card} aria-labelledby="donation-form-title">
      <h2 id="donation-form-title" className={styles.title}>
        Vaši podaci
      </h2>

      <form className={styles.form} noValidate>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="donation-first-name">
              {form.firstNameLabel}
            </label>
            <input
              id="donation-first-name"
              className={styles.input}
              type="text"
              name="firstName"
              defaultValue="Luka"
              autoComplete="given-name"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="donation-last-name">
              {form.lastNameLabel}
            </label>
            <input
              id="donation-last-name"
              className={styles.input}
              type="text"
              name="lastName"
              defaultValue="Postružin"
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="donation-jersey">
            {form.jerseyNumberLabel}
          </label>
          <div className={styles.jerseyRow}>
            <input
              id="donation-jersey"
              className={styles.input}
              type="number"
              name="jerseyNumber"
              defaultValue={27}
              min={0}
              max={99}
              step={1}
              inputMode="numeric"
            />
            <Button type="button" variant="ghost" size="sm" className={styles.randomBtn}>
              {form.randomButtonLabel}
            </Button>
          </div>
          <p className={styles.hint}>{form.jerseyHint}</p>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="donation-amount">
            {form.amountLabel}
          </label>
          <input
            id="donation-amount"
            className={styles.input}
            type="number"
            name="amount"
            defaultValue={30}
            min={1}
            step={0.01}
            inputMode="decimal"
          />
        </div>

        <Button type="button" variant="primary" size="lg" className={styles.submit}>
          {form.submitLabel}
        </Button>
      </form>
    </section>
  )
}
