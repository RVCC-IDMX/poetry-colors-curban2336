(function () {
  const poem = document.querySelector('.poem')
  const btn = document.getElementById('copy-poem')
  const status = document.getElementById('copy-status')

  if (!poem || !btn) return

  function getPoemText() {
    const stanzas = Array.from(poem.querySelectorAll('.stanza'))
    return stanzas
      .map(stanza =>
        Array.from(stanza.querySelectorAll('.line'))
          .map(l => l.textContent.trim())
          .join('\n')
      )
      .join('\n\n')
  }

  async function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
    // fallback
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'absolute'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
      document.body.removeChild(ta)
      return true
    } catch (e) {
      document.body.removeChild(ta)
      return false
    }
  }

  btn.addEventListener('click', async () => {
    const text = getPoemText()
    btn.disabled = true
    const success = await copyText(text).catch(() => false)
    if (success) {
      btn.textContent = 'Copied!'
      status.textContent = 'Poem copied to clipboard'
    } else {
      btn.textContent = 'Copy failed'
      status.textContent = 'Unable to copy to clipboard'
    }
    setTimeout(() => {
      btn.disabled = false
      btn.textContent = 'Copy poem'
      status.textContent = ''
    }, 2000)
  })
})()
// ...new file...