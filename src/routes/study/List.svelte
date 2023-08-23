<script>
	export let listTodos = [];
</script>
<ul>
	{ #each listTodos as item }
	<li>{ item }</li>
	{ :else }
	<li>추가된 할 일이 없습니다.</li>
	{ /each }
</ul>