import test from 'ava';

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});

async function fn() {
	return Promise.resolve('foo');
}

test(async t => {
	t.is(await fn(), 'foo');
});
