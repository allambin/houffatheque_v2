//require('./bootstrap');
import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'

createInertiaApp({
  title: title => `${title} - Houffathèque`,
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})