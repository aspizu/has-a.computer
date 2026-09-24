import {useState} from "react"
import {Button} from "@/components/ui/button"
import {DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {Field, FieldDescription, FieldLabel} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

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
      <DialogHeader>
        <DialogTitle>Choose a subdomain</DialogTitle>
        <DialogDescription>Start with your name or a project name.</DialogDescription>
      </DialogHeader>
      <Field className="claim-field" data-invalid={hasError}>
        <FieldLabel htmlFor="subdomain">Subdomain</FieldLabel>
        <InputGroup className="domain-field">
          <InputGroupInput
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
            aria-describedby="claim-domain-suffix name-status"
            aria-invalid={hasError}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText id="claim-domain-suffix">.has-a.computer</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription id="name-status" className="name-status" role="status">
          {checked
            ? "Valid format. Availability will be checked when registration opens."
            : name === ""
              ? "3–63 characters. Letters, numbers, and hyphens."
              : !valid
                ? "Use 3–63 characters. Start and end with a letter or number."
                : isReserved
                  ? "This name is reserved. Try another one."
                  : "This name has a valid format."}
        </FieldDescription>
      </Field>
      <Button className="check-button" type="submit" disabled={!valid || isReserved}>
        Check name
      </Button>
      <p className="form-note">Registration is not open yet.</p>
    </form>
  )
}
