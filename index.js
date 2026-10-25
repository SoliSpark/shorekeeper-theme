/**
 * Host half of the Shorekeeper startup animation bundle.
 *
 * The whole feature is browser-side: the Client module registers a
 * `shell.overlay` entry that plays the startup film once per page load.
 * The Host row only exists so the bundle owns a Loader entry.
 */
export function apply() {}
