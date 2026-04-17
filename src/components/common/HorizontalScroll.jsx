const HorizontalScroll = ({ children, containerRef }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <div ref={containerRef} className="flex h-full">
        {children}
      </div>
    </section>
  );
};

export default HorizontalScroll;