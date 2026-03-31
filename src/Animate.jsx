import { useInView } from './useInView';

/**
 * Wraps children with a scroll-triggered animation.
 * variant: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight'
 * delay: CSS delay string e.g. '0.1s'
 */
const Animate = ({ children, variant = 'fadeUp', delay = '0s', className = '' }) => {
  const [ref, inView] = useInView();

  const base = 'transition-all duration-700 ease-out';

  const variants = {
    fadeUp:    inView ? 'opacity-100 translate-y-0'  : 'opacity-0 translate-y-10',
    fadeIn:    inView ? 'opacity-100'                : 'opacity-0',
    fadeLeft:  inView ? 'opacity-100 translate-x-0'  : 'opacity-0 -translate-x-10',
    fadeRight: inView ? 'opacity-100 translate-x-0'  : 'opacity-0 translate-x-10',
  };

  return (
    <div
      ref={ref}
      className={`${base} ${variants[variant]} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default Animate;
