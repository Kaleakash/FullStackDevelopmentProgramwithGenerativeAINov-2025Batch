import styles from './MyComponent.module.css'
import  "./App.css"         // equal to linking external CSS file
function MyComponent() {
    return(
        <div>
            <p className={styles.myClass}>Apply styling using React CSS Module</p>
            <p className="info">This is an info paragraph styled with external CSS File</p>
        </div>
    )
}
export default MyComponent