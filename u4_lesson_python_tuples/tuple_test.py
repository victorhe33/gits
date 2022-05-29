import unittest
import main


class Tuple_Test(unittest.TestCase):
    my_tup = ('Hello', 'World', '!')
    test_tup = (32, 100, 2, 10, 21)

    def test_is_tup(self):
        self.assertIsInstance(main.create_tuple([1, 2, 3, 4]), tuple)

    def test_value(self):
        self.assertEqual(main.get_value(self.my_tup), self.my_tup[2])

    def test_values(self):
        self.assertEqual(main.get_values(self.my_tup), self.my_tup[1:4])

    def test_max(self):
        self.assertEqual(main.get_max(self.test_tup), max(self.test_tup))


if __name__ == "__main__":
    unittest.main()
