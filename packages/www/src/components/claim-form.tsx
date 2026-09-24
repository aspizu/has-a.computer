import {useState} from "react"

const reserved = new Set(["www", "api", "mail"])

export function ClaimForm({initialName = ""}: {initialName?: string}) {
  const [name, setName] = useState(initialName)
  const [checked, setChecked] = useState(false)
  const valid = /^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$/.test(name)
  const isReserved = reserved.has(name)
  const hasError = name !== "" && (!valid || isReserved)

  return (
    <form
      id="claim"
      className="claim-form"
      onSubmit={(event) => {
        event.preventDefault()
        if (valid && !isReserved) setChecked(true)
      }}
    >
      <div className="form-body">
        <h2>Choose a subdomain</h2>
        <p>Start with your name or a project name.</p>
        <label htmlFor="subdomain">Subdomain</label>
        <div className={`domain-field${hasError ? " domain-field-error" : ""}`}>
          <input
            id="subdomain"
            name="subdomain"
            value={name}
            onChange={(event) => {
              setName(event.target.value.toLowerCase())
              setChecked(false)
            }}
            placeholder="yourname"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            maxLength={63}
            aria-describedby="name-status"
            aria-invalid={hasError}
          />
          <span>.has-a.computer</span>
        </div>
        <div
          id="name-status"
          className={`name-status${hasError ? " status-error" : ""}`}
          role="status"
        >
          {checked ? (
            <>Valid format. Availability will be checked when registration opens.</>
          ) : name === "" ? (
            <>3–63 characters. Letters, numbers, and hyphens.</>
          ) : !valid ? (
            <>Use 3–63 characters. Start and end with a letter or number.</>
          ) : isReserved ? (
            <>This name is reserved. Try another one.</>
          ) : (
            <>This name has a valid format.</>
          )}
        </div>
        <button className="check-button" type="submit" disabled={!valid || isReserved}>
          Check name
        </button>
      </div>
      <p className="form-note">Registration is not open yet.</p>
    </form>
  )
}
