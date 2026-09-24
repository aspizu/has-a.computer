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
      onSubmit={(event) => {
        event.preventDefault()
        if (valid && !isReserved) setChecked(true)
      }}
    >
      <DialogHeader>
        <DialogTitle>Choose a subdomain</DialogTitle>
        <DialogDescription>Start with your name or a project name.</DialogDescription>
      </DialogHeader>
      <Field className="mt-[26px] gap-0" data-invalid={hasError}>
        <FieldLabel className="mb-[9px] text-[12px] leading-normal" htmlFor="subdomain">
          Subdomain
        </FieldLabel>
        <InputGroup className="group/domain-field h-auto gap-1 rounded-[9px] bg-transparent px-[13px] [transition:border-color_120ms,box-shadow_120ms] tiny:px-[9px]">
          <InputGroupInput
            className="h-[46px] p-0! font-mono text-[14px] leading-normal placeholder:text-[#8b9ba2] md:text-[14px] md:leading-normal mobile:text-[16px]"
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
          <InputGroupAddon
            align="inline-end"
            className="shrink-0 p-0 text-[length:inherit] leading-[inherit] font-[inherit]"
          >
            <InputGroupText
              id="claim-domain-suffix"
              className="font-mono text-[12px] leading-[1.625] text-[#6b808b] [transition:color_150ms] group-focus-within/domain-field:text-(--site-link) tiny:text-[11px]"
            >
              .has-a.computer
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription
          id="name-status"
          className="m-0 min-h-[52px] py-2.5 text-[11px] leading-normal text-[#6b808b] group-data-[invalid=true]/field:text-[#a52e45]"
          role="status"
        >
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
      <Button
        className="h-auto min-h-[43px] w-full text-[13px] leading-normal [&:hover:not(:disabled)]:bg-[#0079b6] [&:hover:not(:disabled)]:bg-clip-border disabled:cursor-not-allowed disabled:border-[#e1eef4] disabled:bg-[#eaf4f8] disabled:bg-clip-border disabled:text-[#6f8793] disabled:opacity-100"
        type="submit"
        disabled={!valid || isReserved}
      >
        Check name
      </Button>
      <p className="mt-[19px] text-center text-[11px] text-[#6b808b]">
        Registration is not open yet.
      </p>
    </form>
  )
}
