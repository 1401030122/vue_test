<template>
	<div class="col-xs-offset-2 col-xs-8">
		<div class="page-header"><h2>Vue Router Demo</h2></div>
		<button @click="forwardShow">前进</button>
		<button @click="backShow">后退</button>
	</div>
</template>

<script>
	export default {
		name:'Banner',
		methods: {
			forwardShow(){
				this.$router.forward()
			},
			backShow(){
				this.$router.back()
			},

		},
	}
</script>