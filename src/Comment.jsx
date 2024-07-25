import { useState } from 'react';
import styles from './css/Comment.module.css';
import { Feedback } from './data';

export default function Comment() {
    const [expandedItems, setExpandedItems] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const toggleExpand = (id) => {
        if (expandedItems.includes(id)) {
            setExpandedItems(expandedItems.filter(item => item !== id));
        } else {
            setExpandedItems([...expandedItems, id]);
        }
    };

    const handleToggleShowMore = () => {
        setShowMore(prevShowMore => !prevShowMore);
    };

    const visibleFeedback = showMore ? Feedback : Feedback.slice(0, 2);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}><img width={50} height={50} src='./assets/comm.png' alt="" /><p>Отзывы о нас</p><img height={50} width={50} src='./assets/comm.png' alt="" /></h1>
            <div className={styles.box}>
                {visibleFeedback.map((user) => (
                    <div className={styles.ellement} key={user.id}>
                        <img width={200} src={user.img} alt={user.name} />
                        <div className={styles.textbox}>
                            <strong><p className={styles.namebox}>{user.name}, {user.surname}</p></strong>
                            <p>{expandedItems.includes(user.id) ? user.text : user.text.slice(0, 100)}</p>
                            <button onClick={() => toggleExpand(user.id)}>
                                {expandedItems.includes(user.id) ? 'Скрыть' : 'Читать'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className={styles.toggleButton} onClick={handleToggleShowMore}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
}
