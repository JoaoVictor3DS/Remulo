import PropTypes from 'prop-types'
import styles from './Container.module.css'

function Container({ children }) {
    Container.propTypes = {
        children: PropTypes.any
    }.isRequired
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container