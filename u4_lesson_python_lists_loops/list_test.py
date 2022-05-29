import unittest
import main


class Test_Lists(unittest.TestCase):
    def test_range(self):
        nums = [x for x in range(3, 13)]
        self.assertEqual(main.gen_list(), nums)

    def test_comprehend(self):
        sums = [x+3 for x in range(1, 6)]
        self.assertEqual(main.comprehend(3), sums)

    def test_add(self):
        list1 = [1, 2, 3]
        list2 = [10, 11, 12]
        my_list = list1+list2
        self.assertEqual(main.add_lists(list1, list2), my_list)

    def test_vanilla(self):
        els = ['Y', 'o', 'u', ' ', 'd', 'i', 'd', ' ', 'i', 't', '!']
        message = ''
        for c in els:
            message += c
        self.assertEqual(main.vanilla_loop(els), message)


if __name__ == "__main__":
    unittest.main()
