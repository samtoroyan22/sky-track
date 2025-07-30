export function FlightImage() {
  return (
    <div
      className="w-full h-72 xs:h-65 xs:pt-20 pt-28"
      // style={{
      //   background: `linear-gradient(to bottom, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
      // }}
    >
      <img
        // src={flight?.airplane.image}
        src="/planes/turkish.png"
        // alt={flight?.airplane.name}
        alt="Airbus A330"
        className="max-w-[95%] h-auto mx-auto xs:max-w-[80%]"
      />
    </div>
  );
}
