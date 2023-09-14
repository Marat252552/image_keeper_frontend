import Spinner from '../../../ui/other/completed/Spinner';
import styles from './lib/styles.module.css';

const GrayButtonTemplate = ({
    children,
    icon,
    text,
    loading,
}: {
    children?: JSX.Element;
    icon: JSX.Element;
    text: string;
    loading: boolean;
}) => {
    return (
        <div className={styles.container}>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    {icon}
                    <div className={styles.text_module}>{text}</div>
                    {children}
                </>
            )}
        </div>
    );
};

export default GrayButtonTemplate;
