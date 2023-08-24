<script>
	export let todos = [];
</script>
<ul>
	{ #each todos as item }
	<li>{ item }</li>
	{ :else }
	<li>추가된 할 일이 없습니다.</li>
	{ /each }
</ul>