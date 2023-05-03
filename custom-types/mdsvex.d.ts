declare module '*.svx' {
  import type { SvelteComponentTyped } from 'svelte';
  const component: SvelteComponentTyped<{}, {}, {}>;
  export default component;
}