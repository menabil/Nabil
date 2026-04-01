import { useLenis } from 'lenis/react';

const SmoothLink = ({ href, children, className }) => {
    const lenis = useLenis();

    const handleScroll = (e) => {
        e.preventDefault();
        if (lenis) {
        lenis.scrollTo(href);
        }
    };

    return (
        <a href={href} onClick={handleScroll} className={className}>
        {children}
        </a>
    );
};

export default SmoothLink;