export function DomainPeriod() {
  return (
    <>
      <span
        className="mx-[0.12em] aspect-square size-(--period-size) min-h-(--period-size) min-w-(--period-size) shrink-0 rounded-[50%] bg-current [--period-size:round(nearest,0.15em,0.5px)]"
        aria-hidden="true"
      />
      <span className="sr-only">.</span>
    </>
  )
}
