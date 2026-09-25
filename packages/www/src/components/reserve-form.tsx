import {useState} from "react"
import {useForm} from "@tanstack/react-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Field, FieldContent, FieldError, FieldLabel} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {DialogFooter} from "@/components/ui/dialog"
import {Spinner} from "@/components/ui/spinner"

const subdomainSchema = z.string().min(1, "Enter an address to reserve.")
const emailSchema = z.email("Enter a valid email address.")

const bareDomain = /^[a-z0-9-]+(\.[a-z0-9-]+)+(:\d+)?([/?#]\S*)?$/i

const websiteSchema = z
  .string()
  .min(1, "Enter the URL of your current website.")
  .refine(
    (value) => value === "" || z.url().safeParse(value).success || bareDomain.test(value),
    "Enter a valid URL.",
  )

const coverLetterSchema = z
  .string()
  .min(80, "Tell us a bit more. At least 80 characters.")
  .max(2000, "Keep it under 2000 characters.")

const reserveSchema = z.object({
  subdomain: subdomainSchema,
  email: emailSchema,
  website: websiteSchema,
  coverLetter: coverLetterSchema,
})

async function checkAvailability(_subdomain: string) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return Math.random() > 0.4
}

export function ReserveForm({
  initialSubdomain,
  onReserved,
}: {
  initialSubdomain: string
  onReserved: () => void
}) {
  const [checked, setChecked] = useState<{
    value: string
    available: boolean
  } | null>(null)
  const form = useForm({
    defaultValues: {
      subdomain: initialSubdomain,
      email: "",
      website: "",
      coverLetter: "",
    },
    validators: {
      onSubmit: reserveSchema,
    },
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 600))
      onReserved()
    },
  })

  const checkAvailable = async ({value}: {value: string}) => {
    if (!subdomainSchema.safeParse(value).success) {
      setChecked(null)
      return
    }
    const available = await checkAvailability(value)
    setChecked({value, available})
    if (!available) {
      return {message: `${value}.has-a.computer is already taken.`}
    }
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        event.stopPropagation()
        void form.handleSubmit()
      }}
      noValidate
    >
      <form.Field
        name="subdomain"
        validators={{
          onChange: subdomainSchema,
          onChangeAsync: checkAvailable,
        }}
        asyncDebounceMs={400}
      >
        {(field) => {
          const value = field.state.value
          const isChecked = checked?.value === value
          const available = isChecked && checked.available
          const checking =
            !available &&
            !isChecked &&
            field.state.meta.isDirty &&
            subdomainSchema.safeParse(value).success
          return (
            <Field data-invalid={field.state.meta.errors.length > 0 || undefined}>
              <FieldLabel htmlFor={field.name}>Address</FieldLabel>
              <FieldContent>
                <InputGroup>
                  <InputGroupInput
                    id={field.name}
                    name={field.name}
                    type="text"
                    value={value}
                    onChange={(event) => field.handleChange(event.target.value.toLowerCase())}
                    onBlur={field.handleBlur}
                    aria-invalid={field.state.meta.errors.length > 0 || undefined}
                    autoComplete="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    maxLength={63}
                    placeholder="yourname"
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupText>.has-a.computer</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                {available ? (
                  <p className="text-left text-xs/relaxed font-normal text-[#0f8a5f]">
                    {value}.has-a.computer is available.
                  </p>
                ) : checking ? (
                  <p className="text-left text-xs/relaxed font-normal text-muted-foreground">
                    <Spinner className="mr-1 inline-block size-3 align-[-1px]" />
                    Checking availability...
                  </p>
                ) : null}
                <FieldError errors={field.state.meta.errors} />
              </FieldContent>
            </Field>
          )
        }}
      </form.Field>
      <form.Field name="email" validators={{onChange: emailSchema}}>
        {(field) => (
          <Field data-invalid={field.state.meta.errors.length > 0 || undefined}>
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <FieldContent>
              <Input
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                aria-invalid={field.state.meta.errors.length > 0 || undefined}
                autoComplete="email"
                placeholder="you@example.com"
              />
              <FieldError errors={field.state.meta.errors} />
            </FieldContent>
          </Field>
        )}
      </form.Field>
      <form.Field name="website" validators={{onChange: websiteSchema}}>
        {(field) => (
          <Field data-invalid={field.state.meta.errors.length > 0 || undefined}>
            <FieldLabel htmlFor={field.name}>Website</FieldLabel>
            <FieldContent>
              <Input
                id={field.name}
                name={field.name}
                type="url"
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                aria-invalid={field.state.meta.errors.length > 0 || undefined}
                autoComplete="url"
                placeholder="https://example.com"
              />
              <FieldError errors={field.state.meta.errors} />
            </FieldContent>
          </Field>
        )}
      </form.Field>
      <form.Field
        name="coverLetter"
        validators={{onBlur: coverLetterSchema, onSubmit: coverLetterSchema}}
      >
        {(field) => (
          <Field data-invalid={field.state.meta.errors.length > 0 || undefined}>
            <FieldLabel htmlFor={field.name}>Cover letter</FieldLabel>
            <FieldContent>
              <Textarea
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                onBlur={field.handleBlur}
                aria-invalid={field.state.meta.errors.length > 0 || undefined}
                maxLength={2000}
                placeholder="Why do you want this address?"
              />
              <FieldError errors={field.state.meta.errors} />
            </FieldContent>
          </Field>
        )}
      </form.Field>
      <form.Subscribe
        selector={(state) => ({
          canSubmit: state.canSubmit,
          isSubmitting: state.isSubmitting,
        })}
      >
        {({canSubmit, isSubmitting}) => (
          <DialogFooter>
            <Button type="submit" data-cuelume-press disabled={!canSubmit} className="h-8">
              {isSubmitting && <Spinner className="size-3.5" />}
              Send request
            </Button>
          </DialogFooter>
        )}
      </form.Subscribe>
    </form>
  )
}
