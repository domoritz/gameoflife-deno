# Conway's Game of Life in TypeScript

Implementation of Conway's Game of Life in an infinite space in TypeScript in Deno. Alive cells are stored in a set. To calculate the next iteration, we compute the number of neighbors for each cell that has neighbors.

I am implementing the Game of Life in different programming languages to learn about them. You can find [all of my implementations on GitHub](https://github.com/domoritz?tab=repositories&q=gameoflife).

## Run an example

```bash
deno run main.ts
```

## Watch while developing

```bash
deno run --watch --unstable main.ts
```

## Test

```bash
deno test
```

## Format and Lint

```bash
deno fmt && deno lint --unstable
```
