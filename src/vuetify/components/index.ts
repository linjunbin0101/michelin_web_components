import type { App } from 'vue'
import * as sourceComponents from './source'
import * as customComponents from './custom'

// Export all components
export * from './source'
export * from './custom'

// Register all components
export function registerComponents(app: App) {
  // Register all components
  Object.entries({ ...sourceComponents, ...customComponents }).forEach(([name, component]) => {
    if (component) {
      app.component(name, component)
    }
  })
}

export function createHcComponent() {
  return {
    install(app: App) {
      registerComponents(app)
    },
  }
}