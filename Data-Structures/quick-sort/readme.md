[8, 4, 23, 42, 16, 15]

make boundary = -1 at the start

make last item pivot

the current item <= boundary then swap current item and the boundary(increment boundary before swap)

[8, 4, 23, 42, 16, 15] boundary++

[8, 4, 23, 42, 16, 15] boundary++

[8, 4, 23, 42, 16, 15] no swap no increment

[8, 4, 23, 42, 16, 15] no swap no increment

sort right side

[8, 4, 42, 16, 15] boundary++ and swap

[8, 4, 42, 15, 16] boundary++ and swap

[8, 4, 15, 42, 16] boundary++ and swap

[8, 4, 15, 16, 42] boundary++ and swap

sort left side

[8, 4, 15, 16, 42] boundary++ and swap

[4, 8, 15, 16, 42]
