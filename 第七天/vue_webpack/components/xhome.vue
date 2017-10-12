<template>
	<div>主页
		<input v-model="name" />
		<p>{{name}}</p>
		<button @click="ok">OK</button>
	</div>
</template>
<script>
	module.exports = {
		data() {
			return {
				name: "底部组件"
			}
		},
		methods: {
			ok() {
				this.$store.state.name = this.name
			}
		},
		components: {
			//childr
		}
	}
</script>
<style>
	
</style>