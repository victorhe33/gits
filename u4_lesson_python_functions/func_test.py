import unittest
import main


class Func_Test(unittest.TestCase):
    def test_name(self):
        self.assertIsInstance(main.return_name(), str)

    def test_power(self):
        exp = 5**2
        self.assertEqual(main.power(5), exp)

    def test_total_sum(self):
        self.assertEqual(main.total_sum(5, 5), 10)

    def test_remainders(self):
        n = 10 % 5
        self.assertEqual(main.remainder(10, 5), n)

    def test_reassign_sum(self):
        n = 5
        n += 5
        self.assertEqual(main.reassign_sum(5), n)


if __name__ == '__main__':
    unittest.main()
