<template>
<div id="bot-check">
	<div class="number-container">
		<span v-for="number in numbers">
			<button @click="checkNumber(number)">{{number}}</button>
		</span>
	</div>
</div>
</template>

<script>
function getRandomNumber(){
	return Math.floor(Math.random * (20 - 0) + 0);
}
function getAllNumbers(){

    let numbers=[];
    for(let i=0;i <= 20;i++){
    	numbers.push(i);
    }

    return numbers;

}
export default {
  data () {
    return {
    	numbers:[],
    	rightNumbers:[
    		getRandomNumber(),
    		getRandomNumber(),
    		getRandomNumber()
    	]
    };
  }
  ready(){
  	this.numbers = getAllNumbers(); 
  }
};
</script>

<style lang="sass">

</style>