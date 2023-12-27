import styles from "./CommentForm.module.css";
import { Button } from '../Button/Button';

export const CommentForm = () => {
    return ( 
        <>
        <form className={styles.form} action='submit'>
            <div className={styles.wrapper}>
                <input type="text" placeholder="Author"/>
                <textarea placeholder="Comment"/>
                <Button 
                  type="submit"
                  text='Add comment'
                  />
            </div>
        </form>
        </>
     );
}
 
