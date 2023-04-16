{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <!DOCTYPE html>\
<html>\
<head>\
	<title>Shooter Game</title>\
	<style>\
		canvas \{\
			border: 1px solid black;\
		\}\
	</style>\
</head>\
<body>\
	<canvas id="gameCanvas" width="800" height="600"></canvas>\
	<script>\
		var canvas = document.getElementById("gameCanvas");\
		var ctx = canvas.getContext("2d");\
		var playerX = canvas.width/2;\
		var playerY = canvas.height/2;\
		var bullets = [];\
		var grenades = [];\
		var enemies = [];\
		var coins = 0;\
		var weapons = [\
			\{name: "Pistol", damage: 10, fireRate: 5, bulletSpeed: 10\},\
			\{name: "Shotgun", damage: 20, fireRate: 1, bulletSpeed: 8, numBullets: 5, spread: 0.3\},\
			\{name: "Machine Gun", damage: 5, fireRate: 15, bulletSpeed: 15, accuracy: 0.9\},\
			\{name: "Grenade", damage: 50, fireRate: 1, bulletSpeed: 10, explosionRadius: 100, explosionTime: 30\},\
			\{name: "SMG", damage: 10, fireRate: 10, bulletSpeed: 12\}\
		];\
		var currentWeapon = 0;\
		var fireCooldown = 0;\
\
		function drawPlayer() \{\
			ctx.beginPath();\
			ctx.arc(playerX, playerY, 10, 0, 2*Math.PI);\
			ctx.fillStyle = "red";\
			ctx.fill();\
			ctx.closePath();\
		\}\
\
		function drawBullets() \{\
			for (var i = 0; i < bullets.length; i++) \{\
				var bullet = bullets[i];\
				ctx.beginPath();\
				ctx.arc(bullet.x, bullet.y, 5, 0, 2*Math.PI);\
				ctx.fillStyle = "blue";\
				ctx.fill();\
				ctx.closePath();\
				bullet.age++;\
				if (bullet.age > 100) \{\
					bullets.splice(i, 1);\
					i--;\
				\}\
			\}\
		\}\
\
		function drawGrenades() \{\
			for (var i = 0; i < grenades.length; i++) \{\
				var grenade = grenades[i];\
				ctx.beginPath();\
				ctx.arc(grenade.x, grenade.y, 8, 0, 2*Math.PI);\
				ctx.fillStyle = "green";\
				ctx.fill();\
				ctx.closePath();\
			\}\
		\}\
\
		function drawEnemies() \{\
			for (var i = 0; i < enemies.length; i++) \{\
				var enemy = enemies[i];\
				ctx.beginPath();\
				ctx.arc(enemy.x, enemy.y, 12, 0, 2*Math.PI);\
				ctx.fillStyle = "black";\
				ctx.fill();\
				ctx.closePath();\
				ctx.fillStyle = "white";\
				ctx.fillText(enemy.health, enemy.x, enemy.y + 20);\
			\}\
		\}\
\
		function updateBullets() \{\
			for (var i = 0; i < bullets.length; i++) \{\
				var bullet = bullets[i];\
				bullet.x += bullet.dx;\
				bullet.y += bullet.dy;\
				if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) \{\
					bullets.splice(i, 1);\
					i--;\
				\}\
			\}\
		\}\
\
		function updateGrenades()\
}