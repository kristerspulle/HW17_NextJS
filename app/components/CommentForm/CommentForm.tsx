import styles from "./CommentForm.module.css"
console.log();

export const CommentForm = () => {
    return ( 
        <>
        <form className={styles.form}>
            <div className={styles.wrapper}>
                <input type="text" placeholder="Author"/>
                <textarea placeholder="Comment"/>
                <button type="submit">Add comment</button>
            </div>
        </form>
        </>
     );
}
 
