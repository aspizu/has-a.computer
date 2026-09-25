import {useForm} from "@tanstack/react-form"
import {useMutation} from "@tanstack/react-query"
import {
  coverLetterSchema,
  emailSchema,
  reserveSchema,
  subdomainSchema,
  websiteSchema,
} from "@has-a-computer/common"
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
import {reserveAddress} from "@/lib/api"

export function useReserveForm(onReserved: () => void) {
  const reservation = useMutation({
    mutationFn: reserveAddress,
  })
  const form = useForm({
    defaultValues: {
      subdomain: "",
      email: "",
      website: "",
      coverLetter: "",
    },
    validators: {
      onSubmit: reserveSchema,
    },
    onSubmit: ({value, formApi}) => {
      if (!reservation.isPending) {
        reservation.mutate(value, {
          onSuccess: () => {
            formApi.reset()
            onReserved()
          },
        })
      }
    },
  })

  return {form, reservation}
}

export function ReserveForm({form, reservation}: ReturnType<typeof useReserveForm>) {
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
      <form.Field name="subdomain" validators={{onChange: subdomainSchema}}>
        {(field) => {
          const value = field.state.value
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
      <form.Field name="coverLetter" validators={{onChange: coverLetterSchema}}>
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
      {reservation.error && <FieldError>{reservation.error.message}</FieldError>}
      <form.Subscribe
        selector={(state) => ({
          canSubmit: state.canSubmit,
          isSubmitting: state.isSubmitting,
        })}
      >
        {({canSubmit, isSubmitting}) => (
          <DialogFooter>
            <Button
              type="submit"
              data-cuelume-press
              disabled={!canSubmit || isSubmitting || reservation.isPending}
              className="h-8"
            >
              {(isSubmitting || reservation.isPending) && <Spinner className="size-3.5" />}
              Send request
            </Button>
          </DialogFooter>
        )}
      </form.Subscribe>
    </form>
  )
}
