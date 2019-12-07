/*
* 二叉树
* */
function Node(data,left,right){
    this.data=data;
    this.left=left;
    this.right=right;
}

function Tree(){
    this.root=null;
}

Tree.prototype={

    //创建二叉树
    create: function(){
        var b=new Node(2,new Node(4),new Node(5));
        var c=new Node(3,new Node(6),new Node(7));
        this.root=new Node(1,b,c);
        console.log(this.root);
    },

    //前序遍历
    preTravel: function(root){
        if(root==null){
            return;
        }

        console.log(root.data);
        this.preTravel(root.left);
        this.preTravel(root.right);
    },

    //中序遍历
    middleTravel: function(root){
        if(root==null){
            return;
        }

        this.middleTravel(root.left);
        console.log(root.data);
        this.middleTravel(root.right);
    },

    //后序遍历
    postTravel: function(root){
        if(root==null){
            return;
        }

        this.middleTravel(root.left);
        this.middleTravel(root.right);
        console.log(root.data);
    }
};
var tree=new Tree();
tree.create();
tree.preTravel(tree.root);
//tree.middleTravel(tree.root);
//tree.postTravel(tree.root);