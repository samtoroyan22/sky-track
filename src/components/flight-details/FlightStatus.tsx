export function FlightStatus() {
  return (
    <div className="bg-card px-element py-element mb-1">
      {/* {PROGRESS BAR} */}
      <div className="flex justify-between text-sm opacity-50">
        <div>
          <span>2 715 km</span>
          <span className="mx-2">•</span>
          <span>3h 1m</span>
        </div>
        <div>
          <span>881 km</span>
          <span className="mx-2">•</span>
          <span>59m</span>
        </div>
      </div>
    </div>
  );
}
