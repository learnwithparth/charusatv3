const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps" style={{
        width: "12rem",
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.405508484101!2d72.8172389648827!3d22.60132763516804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1669547931010!5m2!1sen!2sin"
          title="charusat-map"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
