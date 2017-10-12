<!--html-->
<template>
	<div>
		<childr></childr>
		<p>{{named}}</p>
		<button @click="ok">OK</button>
	</div>
</template>
<!--js-->
<script>
	import childr from "./childr.vue"
	//var abc = require("./childr.vue")
	export default {
		data() {
			return {
				name: "底部组件"
			}
		},
		methods: {
			ok() {
				console.log("okok")
			}
		},
		computed: {
			named() {
				if(this.$store.state.name) {
					return this.$store.state.name
				} else {
					return this.name
				}
			}
		},
		components: {
			childr
		},
		mounted() {
			console.log(this)
			this.$http.get('http://localhost:81/1704/vuejs/test.php').then(response => {
				console.log(response.data)
			}, response => {
				// error callback
			});
		}
	}
</script>
<!--css-->
<style scoped>
	p {
		color: red
	}
</style>