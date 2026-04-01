
const Container = ({ children, className }) => {
    return (
        <div className={`max-w-330 mx-auto px-6 ${className}`}>{children}</div>
    )
}

export default Container