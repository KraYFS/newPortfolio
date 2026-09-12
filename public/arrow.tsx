export default function Arrow({
  width,
  height,
  className
}: {
  width: number
  height: number
  className?: string
}) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.625 6.14673e-07L19.6875 0C19.9361 0 20.1746 0.098772 20.3504 0.274587C20.5262 0.450403 20.625 0.68886 20.625 0.9375V15C20.625 15.5178 20.2053 15.9375 19.6875 15.9375C19.1697 15.9375 18.75 15.5178 18.75 15V3.20083L1.60041 20.3504C1.2343 20.7165 0.640704 20.7165 0.274587 20.3504C-0.0915292 19.9843 -0.0915292 19.3907 0.274587 19.0246L17.4242 1.875L5.625 1.875C5.10723 1.875 4.6875 1.45527 4.6875 0.9375C4.6875 0.419734 5.10723 6.14673e-07 5.625 6.14673e-07Z'
        fill='white'
      />
    </svg>
  )
}
