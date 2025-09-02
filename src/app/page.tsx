import {useTranslations} from 'next-intl';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return <div className='color-transition w-full h-screen p-5 flex bg-primary-light-50 dark:bg-primary-dark-500'>
        <h1>{t('title')}</h1>
    </div>;
}