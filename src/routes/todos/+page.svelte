<script lang="ts">
	import { onMount } from 'svelte';

	interface Todo {
		id: number;
		text: string;
		completed: boolean;
	}

	let todos = $state<Todo[]>([]);
	let newTodoText = $state('');

	// Load todos from localStorage on mount
	onMount(() => {
		const stored = localStorage.getItem('todos');
		if (stored) {
			todos = JSON.parse(stored);
		}
	});

	// Save todos to localStorage whenever they change
	function saveTodos() {
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	function addTodo() {
		if (newTodoText.trim()) {
			todos = [
				...todos,
				{
					id: Date.now(),
					text: newTodoText.trim(),
					completed: false
				}
			];
			newTodoText = '';
			saveTodos();
		}
	}

	function toggleTodo(id: number) {
		todos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
		saveTodos();
	}

	function removeTodo(id: number) {
		todos = todos.filter((todo) => todo.id !== id);
		saveTodos();
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			addTodo();
		}
	}
</script>

<svelte:head>
	<title>Todo List - Michael O'Brien</title>
</svelte:head>

<!-- Navigation Bar -->
<nav class="fixed top-0 left-0 z-50 w-full bg-gray-900 shadow-lg">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
		<a href="/" data-sveltekit-preload-data class="text-2xl font-bold text-blue-400"
			>OBrien-Michael</a
		>
		<a
			href="/"
			data-sveltekit-preload-data
			class="rounded-lg border border-blue-400 px-4 py-2 font-semibold text-blue-400 transition-colors duration-200 hover:bg-blue-600 hover:text-white"
		>
			← Back to Portfolio
		</a>
	</div>
</nav>

<!-- Main Content -->
<main class="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black px-4 pt-24">
	<div class="mx-auto max-w-3xl">
		<div class="mb-8 text-center">
			<h1 class="mb-4 text-5xl font-bold text-white">
				<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
					>Todo List</span
				>
			</h1>
			<p class="text-xl text-gray-300">Keep track of your tasks and stay organized</p>
		</div>

		<!-- Add Todo Section -->
		<div class="mb-8 rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-lg">
			<div class="flex gap-3">
				<input
					type="text"
					bind:value={newTodoText}
					onkeypress={handleKeyPress}
					placeholder="Enter a new task..."
					class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
				<button
					onclick={addTodo}
					class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-700"
				>
					Add Task
				</button>
			</div>
		</div>

		<!-- Todo List -->
		<div class="space-y-3">
			{#if todos.length === 0}
				<div class="rounded-lg border border-gray-700 bg-gray-800 p-12 text-center shadow-lg">
					<div class="mb-4 text-6xl">📝</div>
					<p class="text-xl text-gray-400">No tasks yet. Add one to get started!</p>
				</div>
			{:else}
				{#each todos as todo (todo.id)}
					<div
						class="flex items-center gap-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-lg transition-all duration-200 hover:shadow-xl"
					>
						<button
							onclick={() => toggleTodo(todo.id)}
							class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 transition-colors duration-200 {todo.completed
								? 'border-green-500 bg-green-500'
								: 'border-gray-600 hover:border-blue-500'}"
							aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
						>
							{#if todo.completed}
								<svg
									class="h-4 w-4 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									></path>
								</svg>
							{/if}
						</button>
						<span
							class="flex-1 text-lg {todo.completed ? 'text-gray-500 line-through' : 'text-white'}"
						>
							{todo.text}
						</span>
						<button
							onclick={() => removeTodo(todo.id)}
							class="flex-shrink-0 rounded-lg border border-red-500 px-4 py-2 font-semibold text-red-500 transition-colors duration-200 hover:bg-red-600 hover:text-white"
							aria-label="Remove task"
						>
							Remove
						</button>
					</div>
				{/each}
			{/if}
		</div>

		<!-- Stats -->
		{#if todos.length > 0}
			<div class="mt-8 rounded-lg border border-gray-700 bg-gray-800 p-4 text-center shadow-lg">
				<p class="text-gray-300">
					<span class="font-semibold text-blue-400">{todos.filter((t) => t.completed).length}</span>
					of
					<span class="font-semibold text-blue-400">{todos.length}</span>
					tasks completed
				</p>
			</div>
		{/if}
	</div>
</main>

<!-- Footer -->
<footer class="bg-black py-8 text-white">
	<div class="mx-auto max-w-6xl px-4 text-center">
		<p class="text-gray-400">© 2025 Michael O'Brien. Built with SvelteKit and Tailwind CSS.</p>
	</div>
</footer>
