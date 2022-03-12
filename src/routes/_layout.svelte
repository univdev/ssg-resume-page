<style lang="less">
	.header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 60px;
		transition: .2s;
		background-color: white;
		&--active {
			background-color: transparent;
		}
	}
</style>

<template lang="pug">
	.layout
		header.header(
			class:header--active="{currentDocument.isTop}")
		slot
</template>

<script>
	import { onMount } from 'svelte';
	import Document from '../stores/document';

	let currentDocument = null;

	const documentSubscriber = Document.subscribe((d) => {
		currentDocument = d;
	});

	onMount(() => {
		return () => {
			documentSubscriber();
		};
	});
</script>
