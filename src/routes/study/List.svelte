<script>
	export let listTodos = [];
	export let user = [];
</script>
<ul>
	{ #each listTodos as item }
	<li>{ item } - <small style="color:#bbb">{ user[0] } ({ user[1] })</small></li>
	{ :else }
	<li>추가된 할 일이 없습니다.</li>
	{ /each }
</ul>