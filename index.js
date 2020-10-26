import './lion-fieldset.js'
import './lion-input-iban.js'

window.addEventListener('load', () => {
  const ibanValue = 'DE89370400440532013000'
  const root = document.querySelector('#root')
  root.appendChild(fieldset)
  const fieldset = document.createElement('lion-fieldset')
  fieldset.name = 'input-iban-blacklist'
  fieldset.label = 'IBAN input with blacklisted'

  const iban = document.createElement('lion-input-iban')
  iban.modelValue = ibanValue
  iban.name = 'iban'
  iban.label = 'IBAN'
  iban.modelValue = ibanValue

  fieldset.appendChild(iban)
  root.appendChild(fieldset)
  fieldset.render()
  iban.render()

})
