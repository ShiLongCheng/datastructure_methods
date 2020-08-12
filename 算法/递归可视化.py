import turtle

t = turtle.Turtle()

# def drawSpiral(t, linelen):
#     # 最小规模，0直接退出
#     if linelen > 0:
#         t.forward(linelen)
#         t.right(90)
#         # 减少规模，边长减10
#         # 调用自身
#         drawSpiral(t, linelen - 10)
#
# drawSpiral(t, 200)

# 分形树  树干 左子树  右子树
def tree(branch_len):
    if branch_len > 5:
        t.forward(branch_len)
        t.right(20)
        tree(branch_len - 15)
        t.left(40)
        tree(branch_len - 15)
        t.right(20)
        t.backward(branch_len)

t.left(90)
t.penup()
t.backward(100)
t.pendown()
t.pencolor('green')
t.pensize(3)

tree(75)

t.hideturtle()
turtle.done()
