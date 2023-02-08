import PropTypes from 'prop-types';

export const Sections = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Sections.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
