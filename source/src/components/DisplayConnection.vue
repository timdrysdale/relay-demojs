<template>
  <h3> {{stream.for}} </h3>
  <p> {{stream.verb}} to {{stream.url}} </p>
  <p> Scopes: {{stream.permission.scopes}} </p>
  <p> Token: {{tokenSnippet}} </p>
</template>

<script lang=ts src="./DisplayConnection.ts"></script>
