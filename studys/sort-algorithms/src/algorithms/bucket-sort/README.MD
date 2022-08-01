# Bucket Sort

## Explication

- Distribute the values to be sorted in a set of buckets. Each bucket store one range of values.
- Sort the values of the each bucket. This is make with other algorithm or himself.
- Walks the buckets and put the values of each bucket in back at the ordained array

## Performance

### Best Case

O(N+K). Where K is the number of buckets and N number of values

### Worst Case

O(N^2). Where all is placed in same bucket.

- Simple processing

## Best use

When the data is uniformly distributed for a given range
