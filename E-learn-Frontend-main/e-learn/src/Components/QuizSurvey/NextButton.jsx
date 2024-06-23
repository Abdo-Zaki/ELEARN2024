import classes from './NextButton.module.css'
import { useTranslation } from 'react-i18next'
export default function NextButton({ arrow, onClick }) {
    const { t } = useTranslation();
    return (
        <button onClick={onClick} className={classes.button}>
            <p>{t('Next')}</p>
        </button>
    )
}