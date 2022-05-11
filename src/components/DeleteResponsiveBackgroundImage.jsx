const ResponsiveImage = ({ children }) => {
  return (
    <div className="responsive-image-container">
      <div className="img-overlay">
        <div className="img-txt">{children}</div>
      </div>
    </div>
  );
};

export default ResponsiveImage;
