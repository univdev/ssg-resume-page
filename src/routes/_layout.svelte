<style lang="less">
	.header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 60px;
		transition: .2s;
		background-color: white;
		&--active {
			background-color: transparent;
			.container {
				color: var(--bs-white) !important;
			}
		}
		.container {
			max-width: 1280px;
			width: 100%;
			height: 100%;
			margin: auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-family: "Black Han Sans", "Noto Sans KR";
			padding-left: 16px;
			padding-right: 16px;
			color: var(--bs-dark);
			.logo {
				width: 140px;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 24px;
				margin-left: -16px;
			}
			.navigation {
				height: 100%;
			}
			.menu {
				display: flex;
				height: 100%;
				align-items: center;
				justify-content: center;
				list-style: none;
				font-family: "Black Han Sans", "Noto Sans KR";
				margin-left: -16px;
				margin-right: -16px;
				@media screen and (max-width: 768px) {
					display: none;
				}
				.menu__item {
					padding-left: 16px;
					padding-right: 16px;
					text-align: center;
				}
			}
			.mobile-menu-button {
				display: none;
				background-color: transparent;
				@media screen and (max-width: 768px) {
					display: block;
				}
			}
		}
	}
</style>

<template>
	<div class="layout">
		<Menu
			bind:menu={menu}
			bind:visible={isVisibleMenu}></Menu>
		<header
			class:header--active="{currentDocument.isTop}"
			class="header">
			<div class="container">
				<div class="logo">UNIVDEV</div>
				<nav class="navigation">
					<ul class="menu">
						{#each menu as item}
							<li class="menu__item">{item.text}</li>
						{/each}
					</ul>
				</nav>
				<button
					type="button"
					class="mobile-menu-button"
					on:click="{() => isVisibleMenu = true}">
					<i class="fa-solid fa-bars"></i>
				</button>
			</div>
		</header>
		<slot></slot>
	</div>
</template>

<script>
	import { onMount } from 'svelte';
	import Document from '../stores/document';
	import Menu from './.components/Menu.svelte';
	import Navigations from '../data/menu';

	let currentDocument = null;
	let isVisibleMenu = false;

	const documentSubscriber = Document.subscribe((d) => {
		currentDocument = d;
	});

	onMount(() => {
		return () => {
			documentSubscriber();
		};
	});

	$: menu = Navigations;
</script>
